import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery
} from '@mui/material';
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import Transitions from '@components/app/extended/Transitions';
import useConfig from '@hooks/useThemeConfig';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@redux/store';
import translateProvider from '@providers/translate/translate.provider';
import { toast } from 'react-hot-toast';
import { setLanguagesData } from '@redux/slices/language';
import { languages as languagesObject } from '@utils/languages/languages-data.utils'

const LocalizationSection = () => {

  const { t, i18n } = useTranslation('layout')
  const { borderRadius, locale, onChangeLocale } = useConfig();

  const dispatch = useAppDispatch()
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<any>(null);
  const [language, setLanguage] = useState<string>(locale);

  const { languages } = useAppSelector((state) => state.language)


  const prevOpen = useRef(open);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | undefined,
    lng: string
  ) => {
    setLanguage(lng);
    handleChangeLanguage(lng)
    onChangeLocale(lng);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChangeLanguage = (language: string) => {
    if (i18n.language === language) return
    i18n.changeLanguage(language)
  }

  const getLanguages = () => {
    translateProvider
      .languages()
      .then((result) => {
        dispatch(setLanguagesData(result))
      })
      .catch((error) => {
        toast.error(error.message, { position: 'bottom-right' })
      })
  }

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    setLanguage(locale);
  }, [locale]);

  useEffect(() => {
    getLanguages()
  }, [])

  return (
    <>
      <Box
        sx={{
          ml: 2,
          [theme.breakpoints.down('md')]: {
            ml: 1
          }
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            border: '1px solid',
            borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
            color: theme.palette.primary.dark,
            transition: 'all .2s ease-in-out',
            '&[aria-controls="menu-list-grow"],&:hover': {
              borderColor: theme.palette.primary.main,
              background: theme.palette.primary.main,
              color: theme.palette.primary.light
            }
          }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          title="user"
          onClick={handleToggle}
          color="inherit"
        >
          {language !== 'en' && (
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }} color="inherit">
              {language}
            </Typography>
          )}
          {language === 'en' && <TranslateTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
        </Avatar>
      </Box>

      <Popper
        placeholder=''
        placement={matchesXs ? 'bottom-start' : 'bottom'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [matchesXs ? 0 : 0, 20]
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions position={matchesXs ? 'top-left' : 'top'} in={open} {...TransitionProps}>
              <Paper elevation={16}>
                {open && (
                  <List
                    component="nav"
                    sx={{
                      width: '100%',
                      minWidth: 200,
                      maxWidth: 280,
                      bgcolor: theme.palette.background.paper,
                      borderRadius: `${borderRadius}px`,
                      [theme.breakpoints.down('md')]: {
                        maxWidth: 250
                      }
                    }}
                  >
                    {languages.map((languageIso2) => {
                      const languageName = languagesObject[languageIso2].split(',')[0]

                      return (
                        <ListItemButton key={`language-dropdown-${languageName}`} selected={language === languageIso2} onClick={(event) => handleListItemClick(event, languageIso2)}>
                          <ListItemText
                            primary={
                              <Grid container>
                                <Typography color="textPrimary">{t(`${languageName}`)}</Typography>
                                <Typography variant="caption" color="textSecondary" sx={{ ml: '8px' }}>
                                  ({languageIso2})
                                </Typography>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                      )
                    })}
                    {/* <ListItemButton selected={language === 'en'} onClick={(event) => handleListItemClick(event, 'en')}>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Typography color="textPrimary">English</Typography>
                            <Typography variant="caption" color="textSecondary" sx={{ ml: '8px' }}>
                              (UK)
                            </Typography>
                          </Grid>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton selected={language === 'fr'} onClick={(event) => handleListItemClick(event, 'fr')}>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Typography color="textPrimary">français</Typography>
                            <Typography variant="caption" color="textSecondary" sx={{ ml: '8px' }}>
                              (French)
                            </Typography>
                          </Grid>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton selected={language === 'ro'} onClick={(event) => handleListItemClick(event, 'ro')}>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Typography color="textPrimary">Română</Typography>
                            <Typography variant="caption" color="textSecondary" sx={{ ml: '8px' }}>
                              (Romanian)
                            </Typography>
                          </Grid>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton selected={language === 'zh'} onClick={(event) => handleListItemClick(event, 'zh')}>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Typography color="textPrimary">中国人</Typography>
                            <Typography variant="caption" color="textSecondary" sx={{ ml: '8px' }}>
                              (Chinese)
                            </Typography>
                          </Grid>
                        }
                      />
                    </ListItemButton> */}
                  </List>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default LocalizationSection;

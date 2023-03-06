import { PaletteType } from '@material-ui/core';
import COLORS from './colors';

export const typography = {
    fontFamily:
        '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
};

export const drawerWidth = 250;
export const zIndexNegativeOne = -1;
export const zIndex1 = 1;
export const zIndex2 = 2;
export const zIndex3 = 3;
export const zIndex9 = 9;
export const zIndex99 = 99;
export const zIndex999 = 999;
export const zIndex9999 = 9999;
export const zIndex99999 = 99999;

const overrides = {
    MuiButton: {
        root: {
            fontSize: '1rem',
            margin: '0',
            overflow: 'visible',
            outline: 'none',
            fontWeight: 700,
            letterSpacing: '.8px',
            borderStyle: 'solid',
            transform: 'translateZ(0)',
            transition: 'filter .2s',
            borderRadius: '16px',
            verticalAlign: 'middle',
            lineHeight: '20px',
            borderColor: 'transparent',
            borderTopLeftRadius: '18px',
            borderTopRightRadius: '18px',
            padding: '13px 16px',
            borderWidth: '0 0 4px',
            disableRipple: true,
            boxShadow: 'none',
            '&::after': {
                borderColor: 'transparent',
                bottom: '-4px',
                content: '" "',
                left: 0,
                right: 0,
                top: 0,
                borderWidth: '0 0 4px',
                borderRadius: '16px',
                backgroundClip: 'padding-box',
                borderStyle: 'solid',
                position: 'absolute',
                zIndex: zIndexNegativeOne,
                boxShadow: 'none',
            },
            '&:hover': {
                boxShadow: 'none',
            },
            '&:active': {
                backgroundColor: 'none',
                borderRadius: '16px',
                borderWidth: '4px 0 0',
            },
        },
        contained: {
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none',
            },
            '&:active': {
                backgroundColor: 'none',
                boxShadow: 'none',
            },
            '&.Mui-disabled': {
                backgroundColor: `${COLORS.disabledBackground}`,
                color: COLORS.disabled,
                '&::after': {
                    backgroundColor: `${COLORS.disabledBackground}`,
                    color: COLORS.disabled,
                },
            },
        },
        containedPrimary: {
            backgroundColor: COLORS.primaryDark,
            color: COLORS.white,
            '&::after': {
                backgroundColor: COLORS.primary,
            },
            '&:active': {
                backgroundColor: 'transparent',
            },
        },
        containedSecondary: {
            backgroundColor: COLORS.secondaryDark,
            color: COLORS.white,
            '&::after': {
                backgroundColor: COLORS.secondary,
            },
            '&:active': {
                backgroundColor: 'transparent',
            },
            '&:hover': {
                backgroundColor: COLORS.secondaryDark,
            },
        },
        outlined: {
            borderRadius: '16px',
            cursor: 'pointer',
            touchAction: 'manipulation',
            borderColor: 'transparent',
            padding: '12px 16px',
            borderWidth: '2px 2px 4px',
            background: 'none',
            color: COLORS.primary,
            '&::after': {
                backgroundColor: COLORS.white,
                borderColor: COLORS.disabledBackground,
                left: '-2px',
                right: '-2px',
                top: '-2px',
                borderWidth: '2px 2px 4px',
                borderRadius: '16px',
                backgroundClip: 'padding-box',
            },
            '&:hover': {
                borderColor: 'transparent',
                borderWidth: '2px 2px 4px',
                borderStyle: 'solid',
            },
            '&:active': {
                backgroundColor: 'none',
                boxShadow: 'none',
                borderColor: 'transparent',
                borderWidth: '4px 2px 2px',
                '&::after': {
                    borderBottomWidth: '2px',
                    bottom: '-2px',
                },
            },
        },
        outlinedPrimary: {
            borderWidth: '0 0 4px',
            backgroundColor: COLORS.primary,
            color: COLORS.primary,
            '&:active': {
                backgroundColor: 'transparent',
                borderWidth: '4px 2px 2px',
            },
            '&:hover': {
                border: 'none',
                borderColor: 'transparent',
                borderWidth: '2px 2px 4px',
                borderStyle: 'solid',
            },
            '&::after': {
                borderColor: COLORS.primary,
            },
        },
        outlinedSecondary: {
            borderWidth: '2px 2px 4px',
            backgroundColor: COLORS.secondary,
            color: COLORS.secondary,
            '&:active': {
                backgroundColor: 'transparent',
                borderWidth: '4px 2px 2px',
            },
            '&:hover': {
                borderColor: 'transparent',
                borderWidth: '2px 2px 4px',
                borderStyle: 'solid',
            },
            '&::after': {
                borderColor: COLORS.secondary,
            },
        },
    },
    MUIDataTableBodyCell: {
        root: {
            height: 'auto !important',
        },
    },
    MUIDataTable: {
        paper: {
            width: '100% !important',
        },
    },
    MuiListItemAvatar: {
        root: {
            minWidth: 0,
        },
    },
    MuiListItemIcon: {
        root: {
            minWidth: 0,
        },
    },

    MuiAppBar: {
        root: {
            boxShadow: 'none',
        },
    },
    MuiTable: {
        root: {
            '& tbody tr:hover': {
                backgroundColor: COLORS.whiteSmoke,
                cursor: 'pointer',
            },
        },
    },
    MuiTableContainer: {
        root: {
            borderRadius: '12px',
            border: `2px solid ${COLORS.disabledBackground}`,
        },
    },
    MuiTableHead: {
        root: {
            backgroundColor: COLORS.lightGrey,
        },
    },
    MuiTableRow: {
        root: {
            '&:last-child td': {
                borderBottom: 0,
            },
        },
    },
    MuiTableCell: {
        root: {
            fontWeight: 800,
            borderBottom: `2px solid ${COLORS.disabledBackground}`,
            padding: '11px 12px',
        },
        head: {
            fontWeight: 800,
            color: COLORS.fontBlack,
            fontSize: 18,
            lineHeight: '25px',
        },
        stickyHeader: {
            backgroundColor: COLORS.lightGrey,
            height: 52,
        },
    },
    MuiTooltip: {
        tooltip: {
            fontSize: 16,
            fontWeight: 600,
            borderRadius: '12px',
            border: `2px solid ${COLORS.disabledBackground}`,
            padding: '10px 30px',
            lineHeight: '22px',
            letterSpacing: '0.1px',
            color: COLORS.disabled,
            backgroundColor: COLORS.white,
        },
        arrow: {
            color: COLORS.white,
            '&::before': {
                backgroundColor: COLORS.white,
                border: `2px solid ${COLORS.disabledBackground}`,
            },
        },
    },
    MuiInput: {
        root: {
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 0.1,
            color: COLORS.fontBlack,
            width: '100%',
            height: 48,
            border: `2px solid ${COLORS.progressPrimary}`,
            borderWidth: '2px 2px 4px',
            borderRadius: 12,
        },
        underline: {
            '&::before, &::after': {
                border: 'none !important',
            },
            '&:hover': {
                '&:not(.Mui-disabled)': {
                    '&::before': {
                        border: 'none',
                    },
                },
            },
        },
        input: {
            color: COLORS.fontBlack,
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 0.1,
            paddingLeft: 14,
        },
        formControl: {
            'label + &': {
                marginTop: '0',
            },
        },
    },

    MuiSelect: {
        select: {
            '&:focus': {
                backgroundColor: 'none',
            },
        },
        icon: {
            width: 14,
            height: 8,
            right: 15,
            top: 'calc(50% - 5px)',
        },
    },
    MuiInputLabel: {
        outlined: {
            transform: 'translate(2px, 20px)',
        },
        shrink: {
            display: 'none',
            transform: 'translate(0, 0) scale(0)',
            transformOrigin: 'none',
        },
    },
    MuiMenu: {
        paper: {
            border: `2px solid ${COLORS.progressPrimary}`,
            borderRadius: 12,
        },
    },
    MuiListItem: {
        button: {
            borderBottom: `2px solid ${COLORS.progressPrimary}`,
            borderLeft: 'none',
            borderRight: 'none',
            height: 55,
            '&:hover, &:focus': {
                backgroundColor: 'rgba(66, 176, 255, 0.2)',
                borderBottom: `2px solid ${COLORS.primary}`,
                borderLeft: 'none',
                borderRight: 'none',
                cursor: 'pointer',
            },
            '&:first-child': {
                '&:hover, &:focus': {
                    borderTop: 'none',
                },
            },
            '&:last-child': {
                borderBottom: 'none',
                '&:hover, &:focus': {
                    borderBottom: 'none',
                },
            },
        },
        root: {
            cursor: 'pointer',
            '&.Mui-selected': {
                backgroundColor: 'rgba(66, 176, 255, 0.2) !important',
            },
        },
    },
    MuiIconButton: {
        edgeEnd: {
            marginRight: 0,
        },
    },
    MuiInputBase: {
        root: {
            width: '100%',
        },
        input: {
            backgroundColor: COLORS.white,
            border: `2px solid ${COLORS.disabledBackground}`,
            borderRadius: '12px',
            padding: 8,
        },
        inputMultiline: {
            padding: 8,
        },
    },
    MuiPaginationItem: {
        root: {
            minWidth: 24,
            height: 24,
            padding: '0 4px',
            fontSize: 18,
            fontWeight: 600,
        },
        page: {
            '&.Mui-selected': {
                color: COLORS.primary,
                textDecoration: 'underline',
                background: 'none',
                '&:hover': {
                    backgroundColor: `${COLORS.transparent} !important`,
                },
                '&:focus-visible': {
                    backgroundColor: 'none !important',
                },
            },
            '&:hover': {
                backgroundColor: 'none',
            },
        },
    },
    MuiList: {
        padding: {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
};

const props = {
    MuiButtonBase: {
        disableRipple: true,
    },
};

const CCSTheme = {
    typography,
    overrides,
    props,
};

export default CCSTheme;

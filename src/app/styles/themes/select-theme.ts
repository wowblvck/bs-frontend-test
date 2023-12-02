import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { selectAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const bsStyle = definePartsStyle({
  field: {
    outline: '1px solid',
    outlineColor: 'gray.200',
    borderRadius: 6,
    transition: 'outline-color 0.2s',
    _focus: {
      outlineWidth: '0.12rem',
      outlineColor: 'bs.400',
      transition: 'outline-color 0.2s',
    },
  },
  icon: {
    bg: 'gray.100',
    right: 0,
    width: '3.5rem',
    borderRightRadius: 6,
    borderLeft: '1px solid',
    borderColor: 'gray.200',
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: { bsStyle },
});

/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import actions from './actions';

export const ACTIONS = actions;
export const REGEX_NAME = /^[A-Za-z\-\']+$/;
export const REGEX_EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_PHONE_NUMBER_VALIDATION = /(^\\+?62s?|^0)]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/;
export const REGEX_NUMBER_ONLY = /^[0-9]*$/;
export const REGEX_ALPHABET_ONLY = /^[A-Za-z]+$/;
export const REGEX_ALPHABET_SPACE_ONLY = /^[A-Za-z ]+$/;
export const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const REGEX_START_WITH_ZERO_EIGHT = /^[0]{1}[8]{1}\w*$/;
export const REGEX_START_WITH_ZERO = /^[0]{1}\w*$/;
export const REGEX_START_WITH_NUMBER_DOT_NUMBER = /^[0-9](?=[^.]*\.[^.]*$)[0-9.]*[0-9]$/;
export const REGEX_NO_WHITESPACES_AT_BEGINNING = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;

import { FormElementType } from '@/components/shell/Shell';
import { ShellLineType } from '@/components/shell/ShellLine';
import {
  USER_ID_MAX_LENGTH,
  USER_PW_MAX_LENGTH,
  WARNING_ID_EMPTY,
  WARNING_PW_EMPTY,
} from '@/constants/validation';
import { idValidator, pwValidator } from '@/utils/validation';

const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';
const SHELL_ERROR_USER_SIGNUP_DENIED = 'Signup denied';

const idValidation: FormElementType['validation'] = (val) => {
  const [isValid, message] = idValidator(val);
  if (!isValid) return { isValid, message };

  return { isValid: true };
};

const passwordValidation: FormElementType['validation'] = (val) => {
  const [isValid, message] = pwValidator(val);
  if (!isValid) return { isValid, message };

  return { isValid: true };
};

const yesOrNoValidation: FormElementType['validation'] = (
  val,
  messageWhenInvalid,
) => {
  if (val !== 'y') return { isValid: false, message: messageWhenInvalid };

  return { isValid: true };
};

const emptyValidation: FormElementType['validation'] = (
  val,
  messageWhenInvalid,
) => {
  if (!val.length) return { isValid: false, message: messageWhenInvalid };

  return { isValid: true };
};

const shellFormElement: Record<
  'signin' | 'signup' | 'service' | 'service-settings',
  FormElementType[]
> = {
  signin: [
    {
      type: ShellLineType.Question,
      message: 'username',
      formKey: 'userId',
      validation: (val) => emptyValidation(val, WARNING_ID_EMPTY),
      maxLength: USER_ID_MAX_LENGTH,
    },
    {
      type: ShellLineType.Question,
      message: 'password',
      formKey: 'password',
      validation: (val) => emptyValidation(val, WARNING_PW_EMPTY),
      maxLength: USER_PW_MAX_LENGTH,
    },
    {
      type: ShellLineType.Question,
      message: 'Sign in? [y/n]',
      validation: (val) =>
        yesOrNoValidation(val, SHELL_ERROR_USER_ACCESS_DENIED),
      maxLength: 1,
    },
  ],
  signup: [
    {
      type: ShellLineType.Question,
      message: 'username',
      formKey: 'userId',
      validation: idValidation,
      maxLength: USER_ID_MAX_LENGTH,
    },
    {
      type: ShellLineType.Question,
      message: 'password',
      formKey: 'password',
      validation: passwordValidation,
      maxLength: USER_PW_MAX_LENGTH,
    },
    {
      type: ShellLineType.Question,
      message: 'Would you like to join? [y/n]',
      validation: (val) =>
        yesOrNoValidation(val, SHELL_ERROR_USER_SIGNUP_DENIED),
      maxLength: 1,
    },
  ],
  service: [
    { type: ShellLineType.Question, message: 'service name', formKey: 'name' },
    {
      type: ShellLineType.Question,
      message: 'service domain',
      formKey: 'domain',
    },
  ],
  'service-settings': [
    { type: ShellLineType.Config, message: 'service name', formKey: 'name' },
    {
      type: ShellLineType.Config,
      message: 'service description',
      formKey: 'descriptions',
    },
    {
      type: ShellLineType.Config,
      message: 'service domain',
      formKey: 'domain',
    },
    { type: ShellLineType.Config, message: 'color theme', formKey: 'theme' },
    {
      type: ShellLineType.Config,
      message: 'first question',
      formKey: 'first-question',
    },
  ],
};

export default shellFormElement;

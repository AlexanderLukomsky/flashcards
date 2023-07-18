import { Link } from 'react-router-dom';
import { EmailSentIcon } from '../../../assets/icons/email-sent';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Typography } from '../../ui/typography';
import rootStyle from '../style.module.scss';
import style from './style.module.scss';

export const EmailNotification = () => (
  <Card className={style.card}>
    <Typography variant="large" className={rootStyle.title}>
      Check Email
    </Typography>

    <EmailSentIcon className={style.icon} />

    <Typography variant="body2" className={style.description}>
      We’ve sent an Email with instructions to example@mail.com
    </Typography>

    <Button component={Link} to="/" fullWidth>
      Back to Sign In
    </Button>
  </Card>
);

import React from 'react';

import { Icon } from 'react-icons-kit';
import { ic_email } from 'react-icons-kit/md';
import { bell } from 'react-icons-kit/iconic';
import {person} from 'react-icons-kit/iconic/person';
import {ic_mail_outline} from 'react-icons-kit/md/ic_mail_outline'


//ナビゲーションバーのダイレクトメッセージアイコン
export const DirectMessage = () => <Icon
  size={24}
  style={{marginRight:50}}
  icon={ic_email}
/>;

//ナビゲーションバーの通知アイコン
export const Bell = () => <Icon
  size={22}
  style={{marginRight:50}}
  icon={bell}
/>;

//ナビゲーションバーのアカウントアイコン
export const Person = () => <Icon
  size={24}
  style={{marginRight:50}}
  icon={person}
/>;

export const Mail = () => <Icon
  size={25}
  style={{marginRight:10}}
  icon={ic_mail_outline}
/>;
import React from 'react';

import { Icon } from 'react-icons-kit';
import { ic_email } from 'react-icons-kit/md';
import { bell } from 'react-icons-kit/iconic';
import {person} from 'react-icons-kit/iconic/person';

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
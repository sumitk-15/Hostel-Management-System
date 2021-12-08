import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Dashboard/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Dashboard/profile',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Apply',
    path: '/Dashboard/apply',
    icon: <FaIcons.FaWpforms />,
    cName: 'nav-text'
  },
  {
    title: 'Allotment Status',
    path: '/Dashboard/allotment',
    icon: <FaIcons.FaWpforms />,
    cName: 'nav-text'
  },
  {
    title: 'Rooms',
    path: '/Dashboard/rooms',
    icon: <AiIcons.AiTwotoneNotification />,
    cName: 'nav-text'
  },
  {
    title: 'Messaage',
    path: '/Dashboard/message',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/Dashboard/payment',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },

];

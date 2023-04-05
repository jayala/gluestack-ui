import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
  { descendantStyle: ['_icon'] }
);

import 'styled-components';
import {Theme} from '../styles/theme'; // 실제 Theme 타입 경로

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
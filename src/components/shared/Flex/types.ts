import { CSSProperties } from 'styled-components';

export type FlexProps = Partial<{
    marginString: string;
    paddingString: string;
    width: string;
    height: string;
    flexDirection: CSSProperties['flexDirection'];
    wrap: CSSProperties['flexWrap'];
    justifyContent: CSSProperties['justifyContent'];
    alignItems: CSSProperties['alignItems'];
    alignContent: CSSProperties['alignContent'];
    placeContent: CSSProperties['placeContent'];
    flexGrow: CSSProperties['flexGrow'];
    flexShrink: CSSProperties['flexShrink'];
    flexBasis: CSSProperties['flexBasis'];
    order: CSSProperties['order'];
    alignSelf: CSSProperties['alignSelf'];
    debug: boolean;
}>;

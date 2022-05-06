import React from 'react';

import { RenderStatProps } from './types';

import Flex from '../../shared/Flex';
import Typography from '../../shared/Typography';

const RenderStat: React.FC<RenderStatProps> = ({ title, stat, symbol, width = '100%', textType = 'bodyLarge' }) => {
    if (!stat) {
        return null;
    }

    if (stat === 'unknown') {
        return null;
    }

    return (
        <Flex width={width} marginString="2px 0" flexDirection="row" alignItems="center">
            <Typography fontFamily="bold" textTransform="capitalize" type={textType}>
                {title}:
            </Typography>
            <Flex marginString="0 8px">
                <Typography textTransform="capitalize" type={textType}>
                    {stat} {symbol && symbol}
                </Typography>
            </Flex>
        </Flex>
    );
};

export default RenderStat;

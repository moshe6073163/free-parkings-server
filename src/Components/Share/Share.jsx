import React from 'react';
import { BsShare } from "react-icons/bs";

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";

export default function Share() {
    return (    
    <Box>
        <SpeedDial sx={{ position: 'absolute', bottom:'50px', left:'150px' }} ariaLabel="SpeedDial basic example" icon={<BsShare /> } >
            <SpeedDialAction
                icon={
                    <WhatsappShareButton url={window.location.href} >
                        <WhatsappIcon round={true} size={44} />
                    </WhatsappShareButton>
                }
                tooltipTitle={"share whatsap"}
            />
        </SpeedDial>
    </Box>
    )
}



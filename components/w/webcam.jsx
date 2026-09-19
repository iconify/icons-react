import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fm7-f_bbx.css';
import '../../css/z/zfqdcndez.css';
import '../../css/u/uuh2pnbrr.css';
import '../../css/n/nxd9meued.css';
import '../../css/q/qqey8qzek.css';
import '../../css/a/aajekwbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="fm7-f_bbx"/><path class="zfqdcndez"/><path clip-rule="evenodd" class="uuh2pnbrr"/><path clip-rule="evenodd" class="nxd9meued"/><path clip-rule="evenodd" class="qqey8qzek"/><path clip-rule="evenodd" class="aajekwbwa"/></g>`,
		"fallback": "grommet-icons:webcam",
	});
}

export default Component;

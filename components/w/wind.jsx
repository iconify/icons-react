import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v335rzk7y.css';
import '../../css/j/j4ltlwuyr.css';
import '../../css/t/txx2gwbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v335rzk7y wm-k"/><path class="j4ltlwuyr wm-a"/><path class="txx2gwbeg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wind",
	});
}

export default Component;

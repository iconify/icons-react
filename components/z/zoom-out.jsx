import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s391f59hi.css';
import '../../css/w/w2ug4zbhk.css';
import '../../css/o/olgj5xbvl.css';
import '../../css/f/fmfz-mbie.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s391f59hi"/><path class="w2ug4zbhk wm-shine"/><path class="olgj5xbvl wm-k"/><path class="fmfz-mbie wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:zoom-out",
	});
}

export default Component;

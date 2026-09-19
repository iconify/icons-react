import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5kv900nb.css';
import '../../css/v/vgev59bwn.css';
import '../../css/y/yso2edb_p.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5kv900nb"/><g class="vgev59bwn"><path transform="matrix(.13927 0 0 .13933 -.413 .02)" class="yso2edb_p"/><path transform="matrix(.13927 0 0 .13933 -.413 .02)" class="ziil8acyu"/></g>`,
		"fallback": "catppuccin:yarn-lock",
	});
}

export default Component;

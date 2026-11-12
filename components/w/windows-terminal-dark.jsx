import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj35uabzq.css';
import '../../css/s/sj53jabxf.css';
import '../../css/p/ptnzl-b1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj35uabzq"/><path class="sj53jabxf"/><path class="ptnzl-b1k"/>`,
		"fallback": "selfhst:windows-terminal-dark",
	});
}

export default Component;

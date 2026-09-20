import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/q/q7g9oyb_i.css';
import '../../css/g/gmt7imbfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="q7g9oyb_i"/><path class="gmt7imbfn"/></g>`,
		"fallback": "streamline-color:zodiac-5",
	});
}

export default Component;

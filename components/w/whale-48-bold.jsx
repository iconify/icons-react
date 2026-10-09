import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2orpdgfk.css';
import '../../css/a/aaayorbpv.css';
import '../../css/h/hh899vp3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2orpdgfk"/><path class="aaayorbpv"/><path class="hh899vp3z"/>`,
		"fallback": "energy-icons:whale-48-bold",
	});
}

export default Component;

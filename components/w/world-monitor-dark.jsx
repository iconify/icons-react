import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9t074brf.css';
import '../../css/o/o_5jqwb6l.css';
import '../../css/s/s8uw1xbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9t074brf"/><path class="o_5jqwb6l"/><circle class="s8uw1xbpw"/>`,
		"fallback": "selfhst:world-monitor-dark",
	});
}

export default Component;

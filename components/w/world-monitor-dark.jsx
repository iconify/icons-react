import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9t074brf.css';
import '../../css/v/v-7b52b6r.css';
import '../../css/x/xmmjaib5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9t074brf"/><path class="v-7b52b6r"/><circle class="xmmjaib5i"/>`,
		"fallback": "selfhst:world-monitor-dark",
	});
}

export default Component;

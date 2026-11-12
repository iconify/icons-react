import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec7pwm9zi.css';
import '../../css/b/byw0dqfie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec7pwm9zi"/><path class="byw0dqfie"/>`,
		"fallback": "selfhst:yoink",
	});
}

export default Component;

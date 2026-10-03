import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiftlgbea.css';
import '../../css/i/ix4gy1bln.css';

const viewBox = {"width":1000,"height":684.206};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiftlgbea"/><path class="ix4gy1bln"/>`,
		"fallback": "thesvg-color:whole-foods-market",
	});
}

export default Component;

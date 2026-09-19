import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul-fvud4v.css';
import '../../css/j/jvhn8ub7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul-fvud4v"/><path class="jvhn8ub7u"/>`,
		"fallback": "ion:wineglass",
	});
}

export default Component;

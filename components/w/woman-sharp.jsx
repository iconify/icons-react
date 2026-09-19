import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcyvurbju.css';
import '../../css/j/jd64cjbns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bcyvurbju"/><path class="jd64cjbns"/>`,
		"fallback": "ion:woman-sharp",
	});
}

export default Component;

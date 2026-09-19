import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liowms-cg.css';

const viewBox = {"width":1792,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liowms-cg"/>`,
		"fallback": "fa:wpbeginner",
	});
}

export default Component;

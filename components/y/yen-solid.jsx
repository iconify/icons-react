import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzh7s7btr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzh7s7btr"/>`,
		"fallback": "teenyicons:yen-solid",
	});
}

export default Component;

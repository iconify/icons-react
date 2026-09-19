import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3sktvbkc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3sktvbkc"/>`,
		"fallback": "entypo-social:youko-with-circle",
	});
}

export default Component;

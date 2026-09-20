import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3pa2wa7i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3pa2wa7i"/>`,
		"fallback": "pinhead:windmill",
	});
}

export default Component;

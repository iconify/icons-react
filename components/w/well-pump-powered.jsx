import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb7zws25x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb7zws25x"/>`,
		"fallback": "temaki:well-pump-powered",
	});
}

export default Component;

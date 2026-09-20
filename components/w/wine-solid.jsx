import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duw7_rf-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duw7_rf-t"/>`,
		"fallback": "streamline:wine-solid",
	});
}

export default Component;

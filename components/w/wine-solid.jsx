import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgy--9bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgy--9bou"/>`,
		"fallback": "streamline-sharp:wine-solid",
	});
}

export default Component;

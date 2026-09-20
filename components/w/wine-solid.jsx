import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hisc6g5br.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hisc6g5br"/>`,
		"fallback": "streamline-plump:wine-solid",
	});
}

export default Component;

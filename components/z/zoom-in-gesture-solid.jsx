import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7m_yyd2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p7m_yyd2c"/>`,
		"fallback": "streamline-plump:zoom-in-gesture-solid",
	});
}

export default Component;

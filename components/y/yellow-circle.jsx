import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb5m_klsf.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sb5m_klsf"/><circle class="snpiwsb_l"/>`,
		"fallback": "openmoji:yellow-circle",
	});
}

export default Component;

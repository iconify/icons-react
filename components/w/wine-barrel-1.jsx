import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t8rqv6wrv.css';
import '../../css/x/xajacmoqg.css';
import '../../css/m/m_mo-2h4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t8rqv6wrv"/><path class="xajacmoqg"/><path class="m_mo-2h4a"/></g>`,
		"fallback": "streamline-ultimate:wine-barrel-1",
	});
}

export default Component;

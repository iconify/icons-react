import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fmfvbnfmq.css';
import '../../css/y/ya2o_m_lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fmfvbnfmq"/><path class="ya2o_m_lp"/></g>`,
		"fallback": "streamline-freehand-color:worker-lay-off-fired-user-finger-1",
	});
}

export default Component;

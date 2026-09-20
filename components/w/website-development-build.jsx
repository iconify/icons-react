import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nvof7u14j.css';
import '../../css/m/mbpy3bcwa.css';
import '../../css/l/l3fsfkbua.css';
import '../../css/m/mufjy7bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nvof7u14j"/><path class="mbpy3bcwa"/><path class="l3fsfkbua"/><path class="mufjy7bsk"/></g>`,
		"fallback": "streamline-freehand-color:website-development-build",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz4j7qb2v.css';
import '../../css/m/md286fbip.css';
import '../../css/m/mftkw4boq.css';
import '../../css/e/ej3f_vktx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="uz4j7qb2v"/><g class="md286fbip"><path class="mftkw4boq"/><path class="ej3f_vktx"/></g></g>`,
		"fallback": "cryptocurrency-color:yfi",
	});
}

export default Component;

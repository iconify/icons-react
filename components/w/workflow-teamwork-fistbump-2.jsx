import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vhy98kjap.css';
import '../../css/k/k8v4_t7ll.css';
import '../../css/v/vqc80lbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vhy98kjap"/><path class="k8v4_t7ll"/><path class="vqc80lbmn"/></g>`,
		"fallback": "streamline-ultimate:workflow-teamwork-fistbump-2",
	});
}

export default Component;

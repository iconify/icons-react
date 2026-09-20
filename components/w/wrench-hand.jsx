import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_mwqbchi.css';
import '../../css/r/r5uwyerpu.css';
import '../../css/v/v26sqeg4w.css';
import '../../css/v/vxdit-blj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_mwqbchi"/><path class="r5uwyerpu"/><path class="v26sqeg4w"/><path class="vxdit-blj"/></g>`,
		"fallback": "streamline-flex-color:wrench-hand",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubcl_ebpv.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/osf9ghbva.css';
import '../../css/w/wid0-bcxr.css';
import '../../css/a/a9nz3ub6w.css';
import '../../css/s/suwot2e_p.css';
import '../../css/y/y9r2iyjgv.css';
import '../../css/b/b95xkdzok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubcl_ebpv"/><g class="xtpeb-edw"><path class="osf9ghbva"/><path class="wid0-bcxr"/><path class="a9nz3ub6w"/><path class="suwot2e_p"/><path class="y9r2iyjgv"/><path class="b95xkdzok"/></g>`,
		"fallback": "solar:wi-fi-off-bold-duotone",
	});
}

export default Component;

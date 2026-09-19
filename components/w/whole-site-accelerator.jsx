import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wcgsl9y6o.css';
import '../../css/o/obi01p_4h.css';
import '../../css/t/t818okbbd.css';
import '../../css/m/mkv367bpf.css';
import '../../css/f/f08pkdblx.css';
import '../../css/v/vdhgeqfxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="wcgsl9y6o"/><circle class="obi01p_4h"/><circle class="t818okbbd"/><circle class="mkv367bpf"/><path class="f08pkdblx"/><path class="vdhgeqfxw"/></g>`,
		"fallback": "icon-park-outline:whole-site-accelerator",
	});
}

export default Component;

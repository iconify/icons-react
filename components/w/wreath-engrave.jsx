import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kfxsxib_c.css';
import '../../css/b/bh9ehm6bl.css';
import '../../css/f/fdl6i8bpk.css';
import '../../css/j/j2ywqub6x.css';
import '../../css/q/qs0kxmvmt.css';
import '../../css/v/v-787n_1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kfxsxib_c wm-k"/><path class="bh9ehm6bl wm-a"/><path class="fdl6i8bpk wm-shadow"/><path class="j2ywqub6x wm-k"/><path class="qs0kxmvmt wm-k"/><path class="v-787n_1k wm-a"/></g>`,
		"fallback": "withicons:wreath-engrave",
	});
}

export default Component;

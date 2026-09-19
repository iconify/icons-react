import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ux_ty0bqk.css';
import '../../css/j/jgkcneb9x.css';
import '../../css/p/pd8e-bc_k.css';
import '../../css/k/krp3398zx.css';
import '../../css/j/jtnjq2ijf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTPkkEbwu"><g class="rohhhzb0l"><path clip-rule="evenodd" class="ux_ty0bqk"/><path class="jgkcneb9x"/><path clip-rule="evenodd" class="pd8e-bc_k"/><path class="krp3398zx"/><path class="jtnjq2ijf"/></g></mask></defs><path mask="url(#SVGTPkkEbwu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:zip",
	});
}

export default Component;

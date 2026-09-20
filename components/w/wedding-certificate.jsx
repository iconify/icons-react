import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gga-xta3h.css';
import '../../css/s/s25p_db7h.css';
import '../../css/o/oo5fptpyv.css';
import '../../css/f/fzqeczt0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="gga-xta3h"/><path class="s25p_db7h"/><path class="oo5fptpyv"/><path class="fzqeczt0k"/></g>`,
		"fallback": "streamline-cyber:wedding-certificate",
	});
}

export default Component;

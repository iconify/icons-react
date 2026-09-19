import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jagzkt7_r.css';
import '../../css/t/t3fp4ybfh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnMhcceKY"><g class="wwvp95byt"><path class="jagzkt7_r"/><path class="t3fp4ybfh"/></g></mask></defs><path mask="url(#SVGnMhcceKY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:zijinyunying",
	});
}

export default Component;

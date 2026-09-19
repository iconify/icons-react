import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc2xykbod.css';
import '../../css/z/zid7xkcmh.css';
import '../../css/t/tih4hqb3l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvF4cycZm"><g class="bc2xykbod"><rect class="zid7xkcmh"/><rect class="tih4hqb3l"/></g></mask></defs><path mask="url(#SVGvF4cycZm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:zero-key",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z2utfybjo {
  fill: currentColor;
  d: path("M15.95 12.3L11.7 8.05q-.15-.15-.212-.325t-.063-.375t.063-.375t.212-.325l4.25-4.25q.15-.15.325-.212t.375-.063t.375.063t.325.212l4.25 4.25q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.25 4.25q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213M3 10V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v6q0 .425-.288.713T10 11H4q-.425 0-.712-.288T3 10m10 10v-6q0-.425.288-.712T14 13h6q.425 0 .713.288T21 14v6q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-6q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v6q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20");
}
</style><path class="z2utfybjo"/>`,
		"fallback": "material-symbols:widgets-rounded",
	});
}

export default Component;

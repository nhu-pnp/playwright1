import test from "@playwright/test";

const note1 = {
    title: "Tân CEO Apple đặt thiết kế làm ưu tiên hàng đầu",
    content: "CEO Apple John Ternus đặt thiết kế làm trọng tâm phát triển, áp dụng phong cách làm việc quyết đoán tương tự huyền thoại Steve Jobs."
}
const note2 = {
    title: "Nhiều hoạt động hưởng ứng Ngày Chuyển đổi số Quốc gia 2026",
    content: "Triển lãm chuyển đổi số, đô thị thông minh cùng các diễn đàn về AI, kinh tế sáng tạo diễn ra từ ngày 8 đến 10/10 tại Hà Nội hưởng ứng Ngày Chuyển đổi số Quốc gia 2026."
}
const note3 = {
    title: "Chuyên gia chia sẻ cách để Việt Nam nâng cao năng lực công nghệ",
    content: "Để nâng cao năng lực công nghệ trong nước, theo ông Christopher Nguyễn, cần kết nối nhân lực và doanh nghiệp Việt tham gia các dự án công nghệ toàn cầu, từng bước giúp kỹ sư nắm bắt, làm chủ công nghệ. "
}
const note4 = {
    title: "Tech Awards 2026 mở cổng nhận đăng ký đề cử",
    content: "Chương trình Bình chọn Công nghệ Tech Awards 2026 bắt đầu mở cổng để các đơn vị tự ứng cử sản phẩm, dịch vụ, thương hiệu tại 11 hạng mục. "
}
const note5 = {
    title: "Nỗi lo 'xâm phạm quyền riêng tư' của động vật thời AI",
    content: "AI thúc đẩy quá trình giải mã tiếng kêu của động vật, làm dấy lên lo ngại con người can thiệp quá sâu vào đời sống của chúng. "
}

const notes = [note1, note2, note3, note4, note5]

test("Personal notes", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  const Personalnotes = page.locator(
    '//a[@href="04-xpath-personal-notes.html"]',
  );
  await Personalnotes.click();

  //thêm 10 note có nội dung là tiêu đề và một phần ngắn ( khoảng 3 dòng) tại báo VN express
  const tiltle = page.locator('//input[@placeholder="Enter note title"]');
  const content = page.locator('//textarea[@id="note-content"]');
  const button = page.locator('//button[@id="add-note"]');

  for (var note of notes) {
    await tiltle.fill(note.title);
    await content.fill(note.content);
    await button.click();
  }

  
});

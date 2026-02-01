import { redirect } from "next/navigation";

export default function SkillMdPage() {
  // Redirect to the actual markdown file
  redirect("/skill.md");
}
